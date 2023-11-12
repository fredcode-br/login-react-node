type Props = {
    customClass?: string,
    children: JSX.Element,
};

function ContainerFluid(props: Props) {
    return ( 
      <div className={`w-full max-2xl p-0 ${props.customClass}`}> 
            {props.children} 
      </div>
    )
}

export default ContainerFluid;