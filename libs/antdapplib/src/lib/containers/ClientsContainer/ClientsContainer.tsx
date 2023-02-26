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
import { TicketsTable } from "../../components/tickets/TicketsTable";
import { ClientCreateFormWrapper } from "../../components/clients/ClientCreateFormWrapper/ClientCreateFormWrapper";
import { Modal } from "../../components/common/Modal/Modal";
import { ClientsProvider } from "./ClientsContainer.context";
import { useTypedSelector } from "../../store";
import {
	Button,
	Col,
	Row
} from "antd";
import { TypographyTitle } from "../../components/common/TypographyTitle/TypographyTitle";
import { containerStyle } from "../containerStyle";
import { clientsContainerStyle } from "./ClientsContainer.styles";

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
		filterValues.sortField as string,
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
				managerInfo?.uid
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

	const handleUpdateTableData = (value: TicketsFilterDataType) => {
		setFilterValue(value);
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.uid,
			limitElements,
			value
		)();
	};

	const handleRecallClients = () => {
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.uid,
			limitElements,
			filterValue
		)();
	};

	const handleChangePage = (
		page?: number,
		size?: number
	) => {
		const checkCurrentPage = !page || page === currentPage
			? undefined
			: page > currentPage
				? true
				: false;
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			managerInfo?.uid,
			limitElements,
			filterValue && filterValue,
			ticketsSnapshot,
			checkCurrentPage
		)();
		setLimitElements(size ?? limitElements);
		setCurrentPage(page ?? currentPage);
	};

	return (
		<ClientsProvider value={{handleRecallClients: handleRecallClients}}>
			<Row>
				<Col span={24}>
					<Row
						gutter={[8, 16]}
						justify="space-between"
						align="middle"
					>
						<TypographyTitle
							level={2}
						>
							<FormattedMessage id="template.clients" />
						</TypographyTitle>
						<Button
							onClick={handleOpen}
							type="primary"
						>
							<FormattedMessage id="addClient" />
						</Button>
					</Row>
				</Col>
				<Col
					span={24}
					style={{
						...containerStyle.colWrapper,
						...clientsContainerStyle.root
					}}
				>
					{tickets && <TicketsTable
						data={tickets.map(item => ({...item, key: item.id}))}
						currentPage={currentPage}
						handleRecallClients={handleRecallClients}
						handleChangePage={handleChangePage}
						handleUpdateTableData={handleUpdateTableData}
						totalElements={count}
						limit={limitElements}
					/>}
				</Col>
				<Modal
					handleClose={handleClose}
					open={open}
					title={intl.formatMessage({ id: "addNewClient" })}
				>
					<ClientCreateFormWrapper
						handleClose={handleClose}
					/>
				</Modal>
			</Row>
		</ClientsProvider>
	);
};
