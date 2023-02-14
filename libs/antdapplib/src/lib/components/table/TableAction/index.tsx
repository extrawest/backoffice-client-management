import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { commonWhite, grayscale600 } from "@mono-redux-starter/shared/color";
import {
	Button, Divider, Row
} from "antd";
import {
	FC,
	useState
} from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Modal } from "../../common/Modal/Modal";
import { TypographyParagraph } from "../../common/TypographyParagraph/TypographyParagraph";
import { TypographyTitle } from "../../common/TypographyTitle/TypographyTitle";
import { TicketCreateFormWrapper } from "../../tickets/TicketCreateFormWrapper/TicketCreateFormWrapper";
import { FilterForm } from "../FilterForm";
import { FilterValue, TableActionProps } from "./TableAction.types";

export const TableAction: FC<TableActionProps> = ({ handleFilter, handleRecallClients }) => {
	const intl = useIntl();

	const [activePriority, setActivePriority] = useState<string>("");
	const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
	const [openModal, setOpenModal] = useState<boolean>(false);
	const [openFilter, setOpenFilter] = useState<boolean>(false);

	const filterStatus = (value: boolean) => {
		setIsFilterActive(value);
	};

	const handleOpenModal = () => {
		setOpenModal(true);
	};

	const handleCloseModal = () => {
		setOpenModal(false);
	};

	const handleOpenFilter = () => {
		setOpenFilter(true);
	};

	const handleCloseFilter = () => {
		setOpenFilter(false);
	};

	const handleClear = () => {
		handleFilter({priority: ""});
		handleCloseFilter();
	};

	const handleSubmit = (values: FilterValue) => {
		handleFilter(values);
		handleCloseFilter();
	};

	return (
    <Row
			align="middle"
			justify="space-between"
    >
			<TypographyTitle level={4}>
				<FormattedMessage id='allTickets' />
			</TypographyTitle>
      <div className="relative flex align-items-center gap-3">
				<Button
					onClick={handleOpenModal}
					type="default"
					style={{
						marginTop: "auto",
					}}
				>
					<Row
						gutter={[-10, 16]}
						align={"middle"}
					>
						<PlusOutlined style={{fontSize: "1.5rem", color: grayscale600}}/>
						<Divider
							type="vertical"
						/>
						<TypographyParagraph
							textAlign="start"
							// strong
							style={{
								margin: 0,
								color: grayscale600
							}}
						>
							{intl.formatMessage({id: "add"})}
						</TypographyParagraph>
					</Row>
				</Button>
				<Divider
					type="vertical"
				/>
				<Button
					onClick={handleOpenFilter}
					type="default"
					style={{
						marginTop: "auto",
					}}
				>
					<Row
						gutter={[-10, 16]}
						align={"middle"}
					>
						<FilterOutlined style={{fontSize: "1.5rem", color: grayscale600}}/>
						<Divider
							type="vertical"
						/>
						<TypographyParagraph
							textAlign="start"
							// strong
							style={{
								margin: 0,
								color: grayscale600
							}}
						>
							{intl.formatMessage({id: "filter"})}
						</TypographyParagraph>
					</Row>
				</Button>
        <Modal
					handleClose={handleCloseFilter}
					open={openFilter}
					title={intl.formatMessage({ id: "filter" })}
        >
          <FilterForm
            handleFilter={handleSubmit}
            isFilterActive={filterStatus}
            handleClose={handleClear}
            activePriority={activePriority}
            setActivePriority={(value: string) => setActivePriority(value)}
          />
        </Modal>
      </div>
			<Modal
				handleClose={handleCloseModal}
        open={openModal}
        title={intl.formatMessage({ id: "addNewTicket" })}
			>
				<TicketCreateFormWrapper
					handleRecallClients={handleRecallClients}
					handleClose={handleCloseModal}
				/>
			</Modal>
    </Row>
	);
};
