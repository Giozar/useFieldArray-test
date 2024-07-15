import './App.css'
import { useForm, useFieldArray, Controller} from 'react-hook-form'

function App() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    watch,
    formState: { errors },
  } = useForm({})

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'property'
  })
  const onSubmit = (data: object) => console.log(data);

  console.log((watch('property')));
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className='form-todo'>
        <h2>Lista de tareas</h2>

        <div className='input-container'>
          <ul>
            {
              fields.map((item, index) => (
                <li key={item.id}>
                  <input type="text" {...register(`property.${index}.key`)} />
                <Controller 
                  render={({ field }) => <input {...field} />}
                  name={`property.${index}.value`}
                  control={control}
                />
                <button type='button' onClick={()=> remove(index)}>Eliminar Propiedad</button>
                </li>
              ))
            }
          </ul>
          <button 
            type='button' 
            onClick={() => append({ key: 'myKey', value: 'myValue'})} 
            className='button-sendProperty'
          >Añadir propiedad</button>
        </div>
      </form>
    </>
  )
}

export default App
