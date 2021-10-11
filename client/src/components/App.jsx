import React from 'react'
import {useForm} from 'react-hook-form';

const App  = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register("name")} />
        <select {...register("pronouns")}>
          <option value="other">other</option>
          <option value="sheher">she/her</option>
          <option value="hehim">he/him</option>
          <option value="theythem">they/them</option>
        </select>

        <label>Strength</label>
        <select {...register("strength")} />

        <label>Dexterity</label>
        <select {...register("dexterity")} />

        <label>Constitution</label>
        <select {...register("constitution")} />

        <label>Wisdom</label>
        <select {...register("wisdom")} />

        <label>Intelligence</label>
        <select {...register("intelligence")} />

        <label>Charisma</label>
        <select {...register("charisma")} />


        <br></br>
        <input type="submit" />
      </form>
    );
}

export default App;