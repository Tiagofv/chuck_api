import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Quotes from './Quotes';
export default function Categories(props) {
    const [categories , setCategory] = useState([]);
    const [select, setSelect] = useState('animal')
    const [quotes, setQuotes] = useState([])
    useEffect( ()=>{
        const fetchData  = async  () => {
          const res = await axios.get('https://api.chucknorris.io/jokes/categories');
          setCategory(res.data)
          
        }
        fetchData();
        
    }, []);


    const fetchQuotes = async (category)=>{
        const res = await axios.get(`https://api.chucknorris.io/jokes/random?category=${select}`)
        setQuotes(res.data)
    }

    const handleChange = (event) => {
        setSelect(event.target.value)
    }
    return (
        <div className="mt-5">
            <select className="form-control" onChange={handleChange}>
                   {categories.map((cat)=>
                        <option key={categories.indexOf(cat)}>{cat}</option>
                   )}
            </select>
            <button onClick={fetchQuotes} className="btn btn-primary btn-lg mt-2">Buscar</button>
            <Quotes  quotes={quotes}/>
        </div>
    )
}
