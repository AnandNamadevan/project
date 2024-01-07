import React, { forwardRef } from "react";
import { OverlayTrigger, Popover } from "react-bootstrap";

const InputGroup = forwardRef(
  (
    {
      style,
      className,
      enabled,
      label,
      name,
      value,
      type,
      onFocus,
      onInput,
      onChange,
      placeHolder,
      min,
      max,
      pattern,
      dateFormat,
      id,
      star,
      onPaste,
      onBlur,
      tabIndex,
      onWheel,
      onKeyDown,
      required,
      disabled,
      errorMessage,
      minLength,
      maxLength,
      title,
      step,
      inputstyle,
      key,
      autoComplete,
      helperText,
      readOnly
    },
    ref
  ) => {
    const popover = (
      <>
        {errorMessage && (
          <Popover id="popover-basic">
            {errorMessage !== "" ? (
              <Popover.Body>{errorMessage}</Popover.Body>
            ) : (
              <></>
            )}
          </Popover>
        )}
      </>
    );

    return (
        
      <div className={className}>
        
        <OverlayTrigger
          trigger="focus"
          placement="bottom"
          overlay={errorMessage === ("" || undefined) ? <></> : popover}
        >
          <input
            key={key}
            style={{ backgroundColor: "#f1f2f2", ...style }}
            className={`form-control ${inputstyle}`}
            tabIndex={tabIndex}
            onBlur={onBlur}
            disabled={enabled}
            min={min}
            max={max}
            pattern={pattern}
            name={name}
            id={id}
            onFocus={onFocus}
            onInput={onInput}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onWheel={onWheel}
            onPaste={onPaste}
            required={required}
            type={type}
            value={value}
            placeholder={placeHolder}
            data-date-format={dateFormat}
            title={title}
            minLength={minLength}
            maxLength={maxLength}
            step={step}
            ref={ref}
            autoComplete={autoComplete}
            readOnly={readOnly}
          />
        </OverlayTrigger>
        {helperText && <div className="text-danger mt-2">{helperText}</div>}
      </div>
    );
  }
);

export default InputGroup;
 
