import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Tickets,
	TicketSortFields,
	TicketsFilterDataType
} from "@mono-redux-starter/shared/types";
import {
	query,
	startAfter,
	endBefore,
	where,
	orderBy,
	limit,
	getDocs,
	DocumentData,
	QueryDocumentSnapshot,
	getCountFromServer
} from "firebase/firestore";
import { convertData, ticketsCollectionRef } from "@mono-redux-starter/firebase";
import { Typography } from "../../components/common/Typography/Typography";
import { TypographyEnum } from "../../types/typography";
import { Button } from "../../components/common/Button/Button";
import { TicketsTable } from "../../components/tickets/TicketsTable";
import { ClientCreateFormWrapper } from "../../components/clients/ClientCreateFormWrapper/ClientCreateFormWrapper";
import { Modal } from "../../components/common/Modal/Modal";
import { ClientsProvider } from "./ClientsContainer.context";
import { Container } from "semantic-ui-react";
import { containerStyle } from "./ClientsContainer.styles";
import { useTypedSelector } from "../../store";
import { dashboardStyle } from "../DashboardContainer/DashboardContainer.styles";

const getTicketsCollection = (
	setTickets: Dispatch<SetStateAction<QueryDocumentSnapshot<DocumentData>[]>>,
	setCount: Dispatch<SetStateAction<number>>,
	uid?: string,
	limitValues = 10,
	filterValues?: TicketsFilterDataType,
	currentTickets: QueryDocumentSnapshot<DocumentData>[] = [],
	getNext?: boolean,
) => async () => {
	const queryParams: Parameters<typeof query> = [ticketsCollectionRef];

	const firstVisible = currentTickets.at(0);
	const lastVisible = currentTickets.at(-1);
	queryParams.push(where(
		"manager_uid",
		"==",
		uid
	));
	if(filterValues?.priority){
		queryParams.push(where(
			TicketSortFields.PRIORITY,
			">=",
			filterValues.priority,
		));
		queryParams.push(where(
			TicketSortFields.PRIORITY,
			"<=",
			filterValues.priority
		));
		filterValues.sortField !== TicketSortFields.PRIORITY && queryParams.push(orderBy(TicketSortFields.PRIORITY));
	}

	filterValues?.sortField && queryParams.push(orderBy(
		filterValues.sortField,
		filterValues.sortAsc ? "asc" : "desc"
	));

	if(getNext !== undefined){
		getNext && lastVisible && queryParams.push(startAfter(lastVisible));
		!getNext && firstVisible && queryParams.push(endBefore(firstVisible));
	}

	const queryCollection = query(
		...queryParams,
		limit(limitValues)
	);
	const countOfDocuments = await getCountFromServer(query(...queryParams));
	getNext === undefined && setCount(countOfDocuments.data().count);
	const documentSnapshots = await getDocs(queryCollection);
	setTickets(documentSnapshots.docs as QueryDocumentSnapshot<DocumentData>[]);
	return;
};

export const ClientsContainer: FC = () => {
	const intl = useIntl();
	const [ticketsSnapshot, setTicketsSnapshot] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);
	const [tickets, setTickets] = useState<Tickets[]>([]);
	const [currentPage, setCurrentPage] = useState<number>(0);
	const [count, setCount] = useState<number>(0);
	const [open, setOpen] = useState<boolean>(false);
	const [limitElements, setLimitElements] = useState<number>(10);
	const [filterValue, setFilterValue] = useState<TicketsFilterDataType>();
	const { managerInfo } = useTypedSelector(state => state.authSlice);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	useEffect(
		() => {
			getTicketsCollection(
				setTicketsSnapshot,
				setCount,
				managerInfo?.manager_uid
			)();
		},
		[]
	);

	useEffect(
		() => {
			ticketsSnapshot && setTickets(convertData(ticketsSnapshot));
		},
		[ticketsSnapshot]
	);

	const handleChangeRowsNumber = (value: number) => {
		const currentLimit = value;
		setLimitElements(currentLimit);
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.manager_uid,
			currentLimit,
			filterValue
		)();
	};

	const handleUpdateTableData = (value: TicketsFilterDataType) => {
		setFilterValue(value);
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.manager_uid,
			limitElements,
			value
		)();
	};

	const handleRecallClients = () => {
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.manager_uid,
			limitElements,
			filterValue
		)();
	};

	const handleChangePage = (page: number) => {
		const checkCurrentPage = page === currentPage
			? undefined
			: page > currentPage
				? true
				: false;
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.manager_uid,
			limitElements,
			filterValue && filterValue,
			ticketsSnapshot,
			checkCurrentPage
		)();
		setCurrentPage(page);
	};

	return (
		<ClientsProvider value={{handleRecallClients: handleRecallClients}}>
			<Container fluid>
					<div style={dashboardStyle.titleWrapper}>
					<Typography
						type={TypographyEnum.H4}
					>
						{intl.formatMessage({
							id: "template.clients",
							defaultMessage: "Clients"
						})}
					</Typography>
					<Button
						onClick={handleOpen}
					>
						<FormattedMessage id="addClient" />
					</Button>
				</div>
				{tickets && <TicketsTable
					data={tickets}
					currentPage={currentPage}
					handleChangePage={handleChangePage}
					handleUpdateTableData={handleUpdateTableData}
					handleChangeRowsNumber={handleChangeRowsNumber}
					totalElements={count}
					limit={limitElements}
				/>}
				<Modal
					handleClose={handleClose}
					open={open}
					title={intl.formatMessage({ id: "addNewClient" })}
				>
					<ClientCreateFormWrapper
						handleClose={handleClose}
					/>
				</Modal>
			</Container>
		</ClientsProvider>
	);
};
