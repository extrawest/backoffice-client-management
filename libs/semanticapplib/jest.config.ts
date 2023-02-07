/* eslint-disable */
export default {
	displayName: "semanticapplib",
	preset: "../../jest.preset.js",
	transform: {
		"^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "@nrwl/react/plugins/jest",
		"^.+\\.[tj]sx?$": "babel-jest",
	},
	moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
	coverageDirectory: "../../coverage/libs/semanticapplib",
};