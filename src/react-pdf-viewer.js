import HtmlToReactParser from 'html-to-react';

const htmlToReactParser = new HtmlToReactParser();

const reactElement = htmlToReactParser.parse('../public/templates/viewer.html');

export reactElement;