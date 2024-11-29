"use client";
export default function Modificar({ params }) {
    // Esto permite convertir lo que llega en la URL para poderlo manejar en formato JSON
    const producto = JSON.parse(decodeURIComponent(params.id));

    const modificarProducto = async (e) => {
        e.preventDefault();

        const data = {
            id: producto.id,
            producto: document.getElementById("producto").value,
            cantidad: document.getElementById("cantidad").value,
            precio: document.getElementById("precio").value,
        };

        const url = "http://localhost:3000/productos/modificarProducto";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/productos/mostrar");
    };

    return (
        <div className="m-0 row justify-content-center" style={{ backgroundColor: '#e6f7ff', minHeight: '100vh' }}>
            <form className="col-6 mt-5" onSubmit={modificarProducto}>
                <div className="card border-info shadow-lg">
                    <div className="card-header bg-info text-white">
                        <h1>Modificar Producto</h1>
                    </div>
                    <div className="card-body">
                        <input id="id" defaultValue={producto.id} type="text" className="form-control mb-3 d-none" />
                        <input 
                            id="producto" 
                            defaultValue={producto.producto} 
                            type="text" 
                            className="form-control mb-3" 
                            placeholder="Nombre del producto" 
                            style={{ borderRadius: '8px', borderColor: '#007bff', color: 'white', backgroundColor: '#007bff' }}
                        />
                        <input 
                            id="cantidad" 
                            defaultValue={producto.cantidad} 
                            type="text" 
                            className="form-control mb-3" 
                            placeholder="Cantidad" 
                            style={{ borderRadius: '8px', borderColor: '#007bff', color: 'white', backgroundColor: '#007bff' }}
                        />
                        <input 
                            id="precio" 
                            defaultValue={producto.precio} 
                            type="text" 
                            className="form-control mb-3" 
                            placeholder="Precio" 
                            style={{ borderRadius: '8px', borderColor: '#007bff', color: 'white', backgroundColor: '#007bff' }}
                        />
                    </div>
                    <div className="card-footer">
                        <button 
                            type="submit" 
                            className="btn btn-info col-12 mt-3 mb-3"
                            style={{ backgroundColor: '#0056b3', borderColor: '#0056b3', color: 'white' }}
                        >
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
