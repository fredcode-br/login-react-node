type Props = {
    customClass?: string,
    children: JSX.Element,
};

function Container(props: Props) {
    return ( 
      <div className={`w-full max-2xl px-10 py-0 ${props.customClass}`}> 
            {props.children} 
      </div>
    )
}

export default Container;