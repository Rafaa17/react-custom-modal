export declare type Message = string;
export declare type ValidationValue = boolean | number | string | Date | RegExp;
export declare type ValidationOption<
  Value extends ValidationValue = ValidationValue
> = ValidationValueMessage<Value>;
export declare type ValidationValueMessage<
  Value extends ValidationValue = ValidationValue
> = {
  value: Value;
  message?: Message;
};
export declare type ValidateResult = {
  success: boolean;
  message?: Message;
};
export declare type Validate = (
  data: any
) => ValidateResult | Promise<ValidateResult>;
export declare type ValidationOptions = Partial<{
  required: ValidationOption<boolean>;
  min: ValidationOption<number>;
  max: ValidationOption<number>;
  minDate: ValidationOption<Date>;
  maxDate: ValidationOption<Date>;
  maxLength: ValidationOption<number>;
  minLength: ValidationOption<number>;
  pattern: ValidationOption<RegExp>;
  validate: Validate;
}>;
