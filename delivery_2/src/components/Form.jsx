import { useState } from "react";
import '../styles/Form.css';

const Form = () => {

    const [pokemon, setPokemon] = useState("");

    return(
        <div className='pokemon-form'>
            <form>
                <label htmlFor="pokemon">
                    Add new Pokemon:
                    <input
                        type="text"
                        onChange={(e) => setPokemon(e.target.value)}
                        id='pokemon'
                        value={pokemon}
                        placeholder='Pokemon Name'
                    />
                </label>
                <label htmlFor="pokemonImage">
                    Select Pokemon Image:
                    <input
                        type="file"
                        id='pokemonImage'
                    />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;
