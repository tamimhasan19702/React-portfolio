import MailChimpSubscribe from 'react-mailchimp-subscribe';

export const MailChimpForm = () => {
    const postUrl = `${process.env.REACT_API_MAILCHIMP_URL}?u=${process.env.REACT_API_MAILCHIMP_U}&id=${process.env.REACT_API_MAILCHIMP_ID}`;

    return(
        <>
        <MailChimpSubscribe
        url={postUrl}
        render={({subscribe, status, message}) => {
            <Newsletter
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
        }}
        />

        </>
    )
}