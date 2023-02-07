import { FC } from "react";
import { PageLayoutProps } from "./Pagelayout.types";
import { HelmetHead } from "./HelmetHead/HelmetHead";
import { Container } from "semantic-ui-react";

export const PageLayout: FC<PageLayoutProps> = ({ children }) =>  (
	<Container
		fluid
	>
		<HelmetHead />
		{children}
	</Container>
);

export default PageLayout;
