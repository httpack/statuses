import { HttpStatus } from "../src";

it("should get messages by status code", () => {
	expect(HttpStatus[100]).toBe("Continue");
	expect(HttpStatus[101]).toBe("Switching Protocols");
	expect(HttpStatus[102]).toBe("Processing");
	expect(HttpStatus[200]).toBe("OK");
	expect(HttpStatus[201]).toBe("Created");
	expect(HttpStatus[202]).toBe("Accepted");
	expect(HttpStatus[203]).toBe("Non-authoritative Information");
	expect(HttpStatus[204]).toBe("No Content");
	expect(HttpStatus[205]).toBe("Reset Content");
	expect(HttpStatus[206]).toBe("Partial Content");
	expect(HttpStatus[207]).toBe("Multi-Status");
	expect(HttpStatus[208]).toBe("Already Reported");
	expect(HttpStatus[226]).toBe("IM Used");
	expect(HttpStatus[300]).toBe("Multiple Choices");
	expect(HttpStatus[301]).toBe("Moved Permanently");
	expect(HttpStatus[302]).toBe("Found");
	expect(HttpStatus[303]).toBe("See Other");
	expect(HttpStatus[304]).toBe("Not Modified");
	expect(HttpStatus[305]).toBe("Use Proxy");
	expect(HttpStatus[307]).toBe("Temporary Redirect");
	expect(HttpStatus[308]).toBe("Permanent Redirect");
	expect(HttpStatus[400]).toBe("Bad Request");
	expect(HttpStatus[401]).toBe("Unauthorized");
	expect(HttpStatus[402]).toBe("Payment Required");
	expect(HttpStatus[403]).toBe("Forbidden");
	expect(HttpStatus[404]).toBe("Not Found");
	expect(HttpStatus[405]).toBe("Method Not Allowed");
	expect(HttpStatus[406]).toBe("Not Acceptable");
	expect(HttpStatus[407]).toBe("Proxy Authentication Required");
	expect(HttpStatus[408]).toBe("Request Timeout");
	expect(HttpStatus[409]).toBe("Conflict");
	expect(HttpStatus[410]).toBe("Gone");
	expect(HttpStatus[411]).toBe("Length Required");
	expect(HttpStatus[412]).toBe("Precondition Failed");
	expect(HttpStatus[413]).toBe("Payload Too Large");
	expect(HttpStatus[414]).toBe("Request-URI Too Long");
	expect(HttpStatus[415]).toBe("Unsupported Media Type");
	expect(HttpStatus[416]).toBe("Requested Range Not Satisfiable");
	expect(HttpStatus[417]).toBe("Expectation Failed");
	expect(HttpStatus[418]).toBe("I'm a teapot");
	expect(HttpStatus[421]).toBe("Misdirected Request");
	expect(HttpStatus[422]).toBe("Unprocessable Entity");
	expect(HttpStatus[423]).toBe("Locked");
	expect(HttpStatus[424]).toBe("Failed Dependency");
	expect(HttpStatus[426]).toBe("Upgrade Required");
	expect(HttpStatus[428]).toBe("Precondition Required");
	expect(HttpStatus[429]).toBe("Too Many Requests");
	expect(HttpStatus[431]).toBe("Request Header Fields Too Large");
	expect(HttpStatus[444]).toBe("Connection Closed Without Response");
	expect(HttpStatus[451]).toBe("Unavailable For Legal Reasons");
	expect(HttpStatus[499]).toBe("Client Closed Request");
	expect(HttpStatus[500]).toBe("Internal Server Error");
	expect(HttpStatus[501]).toBe("Not Implemented");
	expect(HttpStatus[502]).toBe("Bad Gateway");
	expect(HttpStatus[503]).toBe("Service Unavailable");
	expect(HttpStatus[504]).toBe("Gateway Timeout");
	expect(HttpStatus[505]).toBe("HTTP Version Not Supported");
	expect(HttpStatus[506]).toBe("Variant Also Negotiates");
	expect(HttpStatus[507]).toBe("Insufficient Storage");
	expect(HttpStatus[508]).toBe("Loop Detected");
	expect(HttpStatus[510]).toBe("Not Extended");
	expect(HttpStatus[511]).toBe("Network Authentication Required");
	expect(HttpStatus[599]).toBe("Network Connect Timeout Error");
});

it("should get messages by identifier", () => {
	expect(HttpStatus.ACCEPTED).toBe("Accepted");
	expect(HttpStatus.ALREADY_REPORTED).toBe("Already Reported");
	expect(HttpStatus.BAD_GATEWAY).toBe("Bad Gateway");
	expect(HttpStatus.BAD_REQUEST).toBe("Bad Request");
	expect(HttpStatus.CLIENT_CLOSED_REQUEST).toBe("Client Closed Request");
	expect(HttpStatus.CONFLICT).toBe("Conflict");
	expect(HttpStatus.CONNECTION_CLOSED_WITHOUT_RESPONSE).toBe(
		"Connection Closed Without Response"
	);
	expect(HttpStatus.CONTINUE).toBe("Continue");
	expect(HttpStatus.CREATED).toBe("Created");
	expect(HttpStatus.EXPECTATION_FAILED).toBe("Expectation Failed");
	expect(HttpStatus.FAILED_DEPENDENCY).toBe("Failed Dependency");
	expect(HttpStatus.FORBIDDEN).toBe("Forbidden");
	expect(HttpStatus.FOUND).toBe("Found");
	expect(HttpStatus.GATEWAY_TIMEOUT).toBe("Gateway Timeout");
	expect(HttpStatus.GONE).toBe("Gone");
	expect(HttpStatus.HTTP_VERSION_NOT_SUPPORTED).toBe(
		"HTTP Version Not Supported"
	);
	expect(HttpStatus.IM_A_TEAPOT).toBe("I'm a teapot");
	expect(HttpStatus.IM_USED).toBe("IM Used");
	expect(HttpStatus.INSUFFICIENT_STORAGE).toBe("Insufficient Storage");
	expect(HttpStatus.INTERNAL_SERVER_ERROR).toBe("Internal Server Error");
	expect(HttpStatus.LENGTH_REQUIRED).toBe("Length Required");
	expect(HttpStatus.LOCKED).toBe("Locked");
	expect(HttpStatus.LOOP_DETECTED).toBe("Loop Detected");
	expect(HttpStatus.METHOD_NOT_ALLOWED).toBe("Method Not Allowed");
	expect(HttpStatus.MISDIRECTED_REQUEST).toBe("Misdirected Request");
	expect(HttpStatus.MOVED_PERMANENTLY).toBe("Moved Permanently");
	expect(HttpStatus.MULTIPLE_CHOICES).toBe("Multiple Choices");
	expect(HttpStatus.MULTI_STATUS).toBe("Multi-Status");
	expect(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED).toBe(
		"Network Authentication Required"
	);
	expect(HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR).toBe(
		"Network Connect Timeout Error"
	);
	expect(HttpStatus.NON_AUTHORITATIVE_INFORMATION).toBe(
		"Non-authoritative Information"
	);
	expect(HttpStatus.NOT_ACCEPTABLE).toBe("Not Acceptable");
	expect(HttpStatus.NOT_EXTENDED).toBe("Not Extended");
	expect(HttpStatus.NOT_FOUND).toBe("Not Found");
	expect(HttpStatus.NOT_IMPLEMENTED).toBe("Not Implemented");
	expect(HttpStatus.NOT_MODIFIED).toBe("Not Modified");
	expect(HttpStatus.NO_CONTENT).toBe("No Content");
	expect(HttpStatus.OK).toBe("OK");
	expect(HttpStatus.PARTIAL_CONTENT).toBe("Partial Content");
	expect(HttpStatus.PAYLOAD_TOO_LARGE).toBe("Payload Too Large");
	expect(HttpStatus.PAYMENT_REQUIRED).toBe("Payment Required");
	expect(HttpStatus.PERMANENT_REDIRECT).toBe("Permanent Redirect");
	expect(HttpStatus.PRECONDITION_FAILED).toBe("Precondition Failed");
	expect(HttpStatus.PRECONDITION_REQUIRED).toBe("Precondition Required");
	expect(HttpStatus.PROCESSING).toBe("Processing");
	expect(HttpStatus.PROXY_AUTHENTICATION_REQUIRED).toBe(
		"Proxy Authentication Required"
	);
	expect(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE).toBe(
		"Requested Range Not Satisfiable"
	);
	expect(HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE).toBe(
		"Request Header Fields Too Large"
	);
	expect(HttpStatus.REQUEST_TIMEOUT).toBe("Request Timeout");
	expect(HttpStatus.REQUEST_URI_TOO_LONG).toBe("Request-URI Too Long");
	expect(HttpStatus.RESET_CONTENT).toBe("Reset Content");
	expect(HttpStatus.SEE_OTHER).toBe("See Other");
	expect(HttpStatus.SERVICE_UNAVAILABLE).toBe("Service Unavailable");
	expect(HttpStatus.SWITCHING_PROTOCOLS).toBe("Switching Protocols");
	expect(HttpStatus.TEMPORARY_REDIRECT).toBe("Temporary Redirect");
	expect(HttpStatus.TOO_MANY_REQUESTS).toBe("Too Many Requests");
	expect(HttpStatus.UNAUTHORIZED).toBe("Unauthorized");
	expect(HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS).toBe(
		"Unavailable For Legal Reasons"
	);
	expect(HttpStatus.UNPROCESSABLE_ENTITY).toBe("Unprocessable Entity");
	expect(HttpStatus.UNSUPPORTED_MEDIA_TYPE).toBe("Unsupported Media Type");
	expect(HttpStatus.UPGRADE_REQUIRED).toBe("Upgrade Required");
	expect(HttpStatus.USE_PROXY).toBe("Use Proxy");
	expect(HttpStatus.VARIANT_ALSO_NEGOTIATES).toBe("Variant Also Negotiates");
});
