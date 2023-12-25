import { IPerson, Person } from '../../interfaces/Person';
import { useDispatch, useSelector } from 'react-redux';
import { PersonState, setData, setPerson } from '../../features/person/personSlice';
import { PersonService } from '../../services/person.service';
import Swal from 'sweetalert2';

export const Form = () => {

    const { person } = useSelector((state: { person: PersonState }) => state);

    const dispatch = useDispatch();

    const personService = new PersonService();

    const setFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setData({ ... person.data, [event.target.id]: event.target.value }));
    };

    const fetchUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const data: IPerson = await personService.put(person.data);

            const dataArray:IPerson[] = [ ...person.list];

            let index:number = dataArray.findIndex((item:IPerson) => item.id === data.id);

            dataArray.splice(index, 1, data);

            dispatch(setPerson(dataArray));

            dispatch(setData(new Person()));

            Swal.fire({
                icon: 'success',
                title: 'Datos actualizados correctamente',
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="px-8 py-4 pb-8 rounded-lg bg-gray-50">

            <form onSubmit={(e)=>person.data.id?fetchUpdate(e):fetchCreate(e)}>

                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Nombre</label>
                    <input 
                        id = "name"
                        type = "text"
                        placeholder = "Nombre"
                        value = {person.data.name}
                        onChange = {(e)=>setFormValue(e)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600" />
                </div>

                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Nombre</label>
                    <input 
                        id = "name"
                        type = "text"
                        placeholder = "Nombre"
                        value = {person.data.name}
                        onChange = {(e)=>setFormValue(e)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600" />
                </div>

                <div className="mt-4">
                    <label className="mb-2 text-gray-800">Nombre</label>
                    <input 
                        id = "name"
                        type = "text"
                        placeholder = "Nombre"
                        value = {person.data.name}
                        onChange = {(e)=>setFormValue(e)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-green-600" />
                </div>

                <button className="w-full px-3 py-4 mt-6 text-white bg-green-600 rounded-lg">
                    {person.data.id ? 'Actualizar' : 'Crear'}
                </button>

            </form>
        </div>
    )
}