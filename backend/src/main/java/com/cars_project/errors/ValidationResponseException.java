package com.cars_project.errors;

import org.springframework.validation.BindingResult;

public class ValidationResponseException extends RuntimeException{
    private BindingResult bindingResult;
    public ValidationResponseException(String message) {
        super(message);
    }
    public ValidationResponseException(String message, BindingResult bindingResult) {
        super(message);
        this.bindingResult = bindingResult;
    }

    public BindingResult getBindingResult() {
        return bindingResult;
    }
}
