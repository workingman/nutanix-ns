/**
 * @NApiVersion 2.1
 * @NScriptType Suitelet
 */
// 20231109-232726
define(['N/log'],
    /**
 * @param{log} log
 */
    (log) => {
        /**
         * Defines the Suitelet script trigger point.
         * @param {Object} scriptContext
         * @param {ServerRequest} scriptContext.request - Incoming request
         * @param {ServerResponse} scriptContext.response - Suitelet response
         * @since 2015.2
         */
        const onRequest = (scriptContext) => {
            const b = 22
        }

        return {onRequest}

    });
