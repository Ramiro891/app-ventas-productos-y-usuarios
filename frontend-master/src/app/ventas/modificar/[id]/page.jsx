"use client";
export default function Modificar({ params }) {
    const venta = JSON.parse(decodeURIComponent(params.id));

    const modificarVenta = async (e) => {
        e.preventDefault();

        const data = {
            id: venta.id,
            cantidad: document.getElementById("cantidad").value
        };

        const url = "http://localhost:3000/ventas/modificarVenta";

        await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        location.replace("http://localhost:3001/ventas/mostrar");
    };

    return (
        <div className="m-0 row justify-content-center" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <form className="col-6 mt-5" onSubmit={modificarVenta}>
                <div className="card" style={cardStyle}>
                    <div className="card-header" style={headerStyle}>
                        <h1 style={{ color: '#fff' }}>Modificar Venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="id" defaultValue={venta.id} type="text" style={inputStyle} className="d-none" />
                        <input id="cantidad" defaultValue={venta.cantidad} type="text" style={inputStyle} placeholder="Cantidad" />
                    </div>
                    <div className="card-footer">
                        <button type="submit" style={buttonStyle}>Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

// Estilos
const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff', // Fondo blanco para la tarjeta
};

const headerStyle = {
    backgroundColor: '#007bff', // Azul
    padding: '10px',
    textAlign: 'center',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
};

const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
};

const buttonStyle = {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff', // Azul
    color: '#fff', // Blanco
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
};
