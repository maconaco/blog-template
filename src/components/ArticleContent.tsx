import * as React from "react";

import { Article } from "../types";

type Props = {
    articleContent: Article["content"];
};

export default ({ articleContent }: Props) => {
    return <h1>{articleContent}</h1>;
};
