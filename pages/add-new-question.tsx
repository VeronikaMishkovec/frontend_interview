import { useState } from 'react'
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'

const AddNewQuestion = ({ list }: any) => {
  const [multiline, setMultiline] = useState('');

  return(
    <div>
      <div>{'Add new question'}</div>
      <FormLabel id="demo-radio-buttons-group-label">{'Choose question category'}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {list?.map((category: any) => {
          return (
            <FormControlLabel control={<Radio />} key={category._id} label={category.title} value={category.title} />
          )})}
      </RadioGroup>
      <FormLabel id="demo-radio-buttons-group-label">{'Choose question language'}</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel control={<Radio />} key={'1'} label={'EN'} value={'EN'} />
        <FormControlLabel control={<Radio />} key={'2'} label={'RU'} value={'RU'} />
      </RadioGroup>
      <div>{'Add answer'}</div>
      <TextField
        id="outlined-multiline-flexible"
        maxRows={5}
        multiline={true}
        value={multiline}
        onChange={(e) => setMultiline(e.target.value)}
      />
      <Button variant={'contained'}>{'Save'}</Button>
    </div>
  )
}

export default AddNewQuestion

export async function getStaticProps() {
  const res = await fetch('https://interview-alpha.vercel.app/category/categories-list',{
    method: 'POST'
  })
  const data = await res.json()

  return {
    props: {
      list: data
    }
  }
}
