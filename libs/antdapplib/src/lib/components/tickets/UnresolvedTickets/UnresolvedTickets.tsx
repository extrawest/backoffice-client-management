import { SimpleDataList } from "@mono-redux-starter/shared/types";
import { Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import { FC } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { TypographyParagraph } from "../../common/TypographyParagraph/TypographyParagraph";
import { TypographyTitle } from "../../common/TypographyTitle/TypographyTitle";
import { GridList } from "../../GridList/GridList";
import { unresolvedTicketsStyle } from "./UnresolvedTickets.styles";

export const UnresolvedTickets: FC = () => {
	const intl = useIntl();
	const ticketsData: SimpleDataList[] = [
		{
			title: intl.formatMessage({id: "waitingRequest"}),
			value: "4238"
		},
		{
			title: intl.formatMessage({id: "awaitingResponse"}),
			value: "1005"
		},
		{
			title: intl.formatMessage({id: "awaitingFix"}),
			value: "914"
		},
		{
			title: intl.formatMessage({id: "pending"}),
			value: "281"
		}
	];
	return (
		<div>
			<Row
				align="middle"
				justify="space-between"
				style={unresolvedTicketsStyle.titleWrapper}
			>
				<Row>
					<Col span={24} >
						<TypographyTitle
							level={5}
						>
							<FormattedMessage id="unresolvedTickets"/>
						</TypographyTitle>
					</Col>
					<Col span={24}>
						<TypographyParagraph style={{textAlign: "start"}}>
							<FormattedMessage
								id="group"
								values={{caption: "Support"}}
							/>
						</TypographyParagraph>
					</Col>
				</Row>
				<Link href="#">
					<FormattedMessage id="viewDetails" />
				</Link>
			</Row>
			<GridList
				data={ticketsData}
				direction="row"
			/>
		</div>
	);
};
