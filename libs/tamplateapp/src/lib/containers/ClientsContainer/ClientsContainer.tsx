import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
	Box,
	SelectProps,
	Typography
} from "@mui/material";
import { contentSx, titleWrapperSx } from "./ClientsContainer.styles";
import { TicketsTable } from "../../components/table/TicketsTable";
import {
	Tickets,
	TicketSortFields,
	TicketsRequest
} from "@mono-redux-starter/shared/types";
import Button from "../../components/common/Button/Button";
import { Modal } from "../../components/common/Modal/Modal";
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
import { ClientCreateFormWrapper } from "../../components/clients/ClientCreateFormWrapper/ClientCreateFormWrapper";

const getTicketsCollection = (
	setTickets: Dispatch<SetStateAction<QueryDocumentSnapshot<DocumentData>[]>>,
	setCount: Dispatch<SetStateAction<number>>,
	limitValues = 10,
	values?: TicketsRequest,
	currentTickets: QueryDocumentSnapshot<DocumentData>[] = [],
	getNext?: boolean,
) => async () => {
	const queryParams: Parameters<typeof query> = [ticketsCollectionRef];

	const firstVisible = currentTickets.at(0);
	const lastVisible = currentTickets.at(-1);

	if(values?.priority){
		queryParams.push(where(
			TicketSortFields.PRIORITY,
			">=",
			values.priority
		));
		queryParams.push(where(
			TicketSortFields.PRIORITY,
			"<=",
			values.priority
		));
		values.sortField !== TicketSortFields.PRIORITY && queryParams.push(orderBy(TicketSortFields.PRIORITY));
	}
	values?.sortField && queryParams.push(orderBy(
		values.sortField,
		values.sortAsc ? "asc" : "desc"
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
	const [filterValue, setFilterValue] = useState<TicketsRequest>();

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

	const handleChangeRowsNumber: SelectProps["onChange"] = (e) => {
		const currentLimit = e.target.value as number;
		setLimitElements(currentLimit);
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			currentLimit,
			filterValue
		)();
	};

	const handleUpdateTableData = (value: TicketsRequest) => {
		setFilterValue(value);
		getTicketsCollection(
			setTicketsSnapshot,
			setCount,
			limitElements,
			value
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
			limitElements,
			filterValue && filterValue,
			ticketsSnapshot,
			checkCurrentPage
		)();
		setCurrentPage(page);
	};

	return (
		<Box sx={contentSx}>
			<Box sx={titleWrapperSx}>
				<Typography
					variant="h5"
					sx={{ width: "calc(100% - 240px)" }}
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
			</Box>
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
        type="md"
        fullWidth
			>
				<ClientCreateFormWrapper
					handleClose={handleClose}
				/>
			</Modal>
		</Box>
	);
};
