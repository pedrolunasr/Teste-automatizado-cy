// cypress/support/factories/userFactory.js
import { faker } from '@faker-js/faker'

export function buildUser(overrides = {}) {
  // Gerar nomes separados (pra usar no endereço também)
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    
    name: `${firstName} ${lastName}`,
    email: faker.internet.email({ firstName, lastName }).toLowerCase(),
    password: faker.internet.password({ length: 10 }),

    
    birth: {
      day: String(faker.number.int({ min: 1, max: 28 })),  
      month: String(faker.number.int({ min: 1, max: 12 })), 
      year: String(faker.number.int({ min: 1970, max: 2000 }))
    },

    
    address: {
      firstName,
      lastName,
      company: faker.company.name(),
      address1: faker.location.streetAddress(),
      address2: faker.location.secondaryAddress(),
      country: 'Canada', 
      state: faker.location.state(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      mobile: faker.phone.number('###########') 
    },

    ...overrides // permite sobrescrever valores caso precise
  }
}
