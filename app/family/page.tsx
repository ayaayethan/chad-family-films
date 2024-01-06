const family = [
  {
    name: 'Amaya Navarro',
    about: 'Director, big head'
  },
  {
    name: 'Jazlin Navarro',
    about: 'Assistant Director, bigger head'
  },
  {
    name: 'Michael Navarro',
    about: 'Actor, biggest head'
  },
  {
    name: 'Julia Ruiz',
    about: 'Cinematographer, ok sized head'
  },
  {
    name: 'Louie Gonzales',
    about: 'Actor, somewhat big head'
  },
  {
    name: 'Andrew Davis',
    about: 'Actor, no head'
  },
  {
    name: 'Andrew Mohler',
    about: 'Sound, small head'
  },
]

export default function Family() {
  return (
    <div className="flex flex-col my-12 w-5/6">
      <h1 className="text-3xl text-center font-bold">Meet The<span className="text-pink-500"> Fam!</span></h1>
      <div>
        {family.map(person => {
          return (
            <div className="bg-blue-900 rounded-md py-4 px-2 my-3 min-w-full shadow-lg">
              <h2 className="text-lg text-center">{person.name}</h2>
              <p className="text-sm text-center">{person.about}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}