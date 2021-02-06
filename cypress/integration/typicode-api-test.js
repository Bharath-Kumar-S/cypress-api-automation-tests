/// <reference types="cypress" />

describe('JSON Typicode', () => {
    it('Get all user posts', () => {
        cy.request('/posts')
            .then((response) => {
                let first_response_object = Object.keys(response.body[0]);
                let keys = [`userId`, `id`, `title`, `body`];
                for (let key of keys) {
                    expect(first_response_object).to.includes(key)
                }
            })
    })

    it(`Post a new user post`, () => {
        cy.request(`POST`,'/posts',`{
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          }`).then((response)=>{
            expect(response.status).to.eq(201);
            expect(response.body.id).to.eq(101);
          })
    })
})