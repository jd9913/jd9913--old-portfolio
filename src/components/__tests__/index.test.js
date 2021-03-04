import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AboutPage from "../../pages";

afterEach(cleanup);

describe("About component", () => {
	//renders About test
	//First Test
	it("renders", () => {
		render(<AboutPage />);
	});
});
