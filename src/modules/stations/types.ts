export type StationFieldType =
  | 'string'
  | 'number'
  | 'boolean'
  | 'date'
  | 'connector';

export type ConnectorFieldType = {
  type: string;
  currentType: string;
  status: string;
};
