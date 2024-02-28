import { InputProps } from "@/components/Popup/Popup.model";
import { ValidateResult } from "@/components/Popup/Popup.validation.model";

const getDateWithoutTime = function (date: Date) {
  return new Date(date.toDateString());
};

export class InputValidation {
  private static DEFAULT_ERROR_MESSAGE = "Invalid Value";

  public static validateDate(
    input: InputProps,
    value: string | undefined
  ): ValidateResult {
    const validation = input.validation!;

    if (validation.required) {
      if (!value) {
        return {
          success: false,
          message: validation.required.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.minDate) {
      if (
        value &&
        new Date(value).getTime() <
          getDateWithoutTime(validation.minDate.value).getTime()
      ) {
        return {
          success: false,
          message: validation.minDate.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.maxDate) {
      if (
        value &&
        new Date(value).getTime() >
          getDateWithoutTime(validation.maxDate.value).getTime()
      ) {
        return {
          success: false,
          message: validation.maxDate.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    return {
      success: true,
    };
  }

  public static validateText(
    input: InputProps,
    value: string | undefined
  ): ValidateResult {
    const validation = input.validation!;

    if (validation.required) {
      if (!value) {
        return {
          success: false,
          message: validation.required.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.minLength) {
      if (value !== undefined && value.length < validation.minLength.value) {
        return {
          success: false,
          message: validation.minLength.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.maxLength) {
      if (value !== undefined && value.length > validation.maxLength.value) {
        return {
          success: false,
          message: validation.maxLength.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    return {
      success: true,
    };
  }

  public static validateNumber(
    input: InputProps,
    value: number | undefined
  ): ValidateResult {
    const validation = input.validation!;

    if (validation.required) {
      if (!value) {
        return {
          success: false,
          message: validation.required.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.min) {
      if (value === undefined || value < validation.min.value) {
        return {
          success: false,
          message: validation.min.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    if (validation.max) {
      if (value !== undefined && value > validation.max.value) {
        return {
          success: false,
          message: validation.max.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    return {
      success: true,
    };
  }

  public static validateFile(
    input: InputProps,
    value: File | undefined
  ): ValidateResult {
    const validation = input.validation!;

    if (validation.required) {
      if (!value) {
        return {
          success: false,
          message: validation.required.message ?? this.DEFAULT_ERROR_MESSAGE,
        };
      }
    }

    return {
      success: true,
    };
  }
}
