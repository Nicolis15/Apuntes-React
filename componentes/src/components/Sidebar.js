function Sidebar(props){
    const style = {
        background : "azure"
    }
    return(
        <aside ClassName="prier-name">
            <h1>{props.contenido} <em>Este es un ejemplo de la etiqueta EM</em></h1>
        </aside>
    )
}

export default Sidebar;