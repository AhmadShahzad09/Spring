package com.assignment.fxdeals.exception;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class FxDealsExceptionHandler {

    public static final int SERVER_ERROR_CODE = 500;

    private final Logger logger = LoggerFactory.getLogger(getClass());

    private final ResponseEntityExceptionHandler delegate =
            new DelegateExceptionHandler();

    public static class DelegateExceptionHandler
            extends ResponseEntityExceptionHandler {
    }

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleException(
            Exception exception, WebRequest request) throws Exception {

    // write your code here
    }


    public final Map<String, Object> generateError(
            String code, String message, String details) {

        Map<String, Object> error = new HashMap<>();
        error.put("code", code);
        error.put("message", message);
        error.put("details", details);
        return Collections.singletonMap("error", error);
    }

}
