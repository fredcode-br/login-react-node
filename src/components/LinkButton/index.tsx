type Props = {
    customClass?: string,
    text: string,
    linkTo: string,
};

function LinkButton({customClass, text, linkTo}: Props) {
    return ( 
        <a 
            className={`no-underline font-normal bg-sky-600 ${customClass}`}
            href={linkTo}
        > 
            {text} 
        </a>
    )
}

export default LinkButton;