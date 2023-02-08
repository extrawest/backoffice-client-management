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
	limitToLast,
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
import { DataTableProps } from "primereact/datatable";

const getTicketsCollection = (
	setTickets: Dispatch<SetStateAction<QueryDocumentSnapshot<DocumentData>[]>>,
	setCount: Dispatch<SetStateAction<number>>,
	filterValues?: TicketsFilterDataType,
	currentTickets: QueryDocumentSnapshot<DocumentData>[] = [],
) => async () => {
	const queryParams: Parameters<typeof query> = [ticketsCollectionRef];

	const firstVisible = currentTickets.at(0);
	const lastVisible = currentTickets.at(-1);

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
	const queryCollection = query(
		...queryParams,
		limit(10000)
	);
	const countOfDocuments = await getCountFromServer(query(...queryParams));
	setCount(countOfDocuments.data().count);
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
	const [limitElements, setLimitElements] = useState<number>(5);
	const [filterValue, setFilterValue] = useState<TicketsFilterDataType>();

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
				setCount
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
			value
		)();
	};

	const handleRecallClients = () => {
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			filterValue
		)();
	};

	const handleChangePage: DataTableProps["onPage"] = (e) => {

		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			filterValue && filterValue,
			ticketsSnapshot,
		)();
		setLimitElements(e.rows ?? limitElements);
		setCurrentPage(e.page ?? currentPage);
	};

	return (
		<ClientsProvider value={{handleRecallClients: handleRecallClients}}>
			<div className="mt-8">
				<div className="flex justify-content-between align-items-center mb-5">
					<Typography
						type={TypographyEnum.H5}
						extraClasses="max-w-20rem w-full text-start"
					>
						{intl.formatMessage({
							id: "template.clients",
							defaultMessage: "Clients"
						})}
					</Typography>
					<Button
						onClick={handleOpen}
						label={intl.formatMessage({id: "addClient"})}
					/>
				</div>
				{tickets && <TicketsTable
					data={tickets}
					currentPage={currentPage}
					handleChangePage={handleChangePage}
					handleUpdateTableData={handleUpdateTableData}
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
			</div>
		</ClientsProvider>
	);
};
