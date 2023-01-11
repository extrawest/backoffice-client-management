import {
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Box, Typography } from "@mui/material";
import { contentSx, titleWrapperSx } from "./ClientsContainer.styles";
import { TicketsTable } from "../../components/table/TicketsTable";
import { Tickets } from "@mono-redux-starter/shared/types";
import Button from "../../components/common/Button/Button";
import { Modal } from "../../components/common/Modal/Modal";
import {
	query,
	startAfter,
	endBefore,
	limit,
	getDocs,
	DocumentData,
	QueryDocumentSnapshot,
} from "firebase/firestore";
import { convertData, ticketsCollectionRef } from "@mono-redux-starter/firebase";
import { ClientCreateFormWrapper } from "../../components/clients/ClientCreateFormWrapper/ClientCreateFormWrapper";

const getTicketsCollection = (
	setTickets: Dispatch<SetStateAction<QueryDocumentSnapshot<unknown>[]>>,
	limitValues = 10,
	currentTickets: QueryDocumentSnapshot<DocumentData>[] = [],
	getNext?: boolean,
) => async () => {
	const queryParams: Parameters<typeof query> = [ticketsCollectionRef];

	const firstVisible = currentTickets.at(0);
	const lastVisible = currentTickets.at(-1);

	if(getNext !== undefined){
		getNext && lastVisible && queryParams.push(startAfter(lastVisible));
		!getNext && firstVisible && queryParams.push(endBefore(firstVisible));
	}

	const queryCollection = query(
		...queryParams,
		limit(limitValues)
	);

	const documentSnapshots = await getDocs(queryCollection);
	setTickets(documentSnapshots.docs);
	return;
};

export const ClientsContainer: FC = () => {
	const intl = useIntl();
	const [ticketsSnapshot, setTicketsSnapshot] = useState<QueryDocumentSnapshot<unknown>[]>([]);
	const [tickets, setTickets] = useState<Tickets[]>([]);
	const [open, setOpen] = useState<boolean>(false);

	const handleClose = () => {
		setOpen(false);
	};

	const handleOpen = () => {
		setOpen(true);
	};

	useEffect(
		() => {
			getTicketsCollection(setTicketsSnapshot)();
		},
		[]
	);

	useEffect(
		() => {
			ticketsSnapshot && setTickets(convertData(ticketsSnapshot));
		},
		[ticketsSnapshot]
	);

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
