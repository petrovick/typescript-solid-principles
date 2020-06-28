interface ITemplateVariables {
  [key: string]: string | number;
}
export default interface IParseMailTemplateDO {
  file: string;
  variables: ITemplateVariables;
}
