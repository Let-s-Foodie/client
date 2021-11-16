class UserStorage {
  constructor(key) {
    this.key = key
  }
  async loginwithFirebase(id, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      const errorMessage =
        'The email address or password you entered is incorrect.'

      const error = new Error(errorMessage)
      throw error
    }

    const user = await response.json()
    return user
  }
  async checkRole(user) {
    const url = 'http://localhost:8000/users/signin'

    const roleCheck = await fetch(url, {
      body: JSON.stringify({ data: user }),
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, ',
        'Content-Type': 'application/json',
        authtoken: user.idToken,
      },
    })

    const userInfo = await roleCheck.json()

    return userInfo
  }

  async updateRole(id, role, user) {
    const url = `http://localhost:8000/users/${id}`

    const roleUpdate = await fetch(url, {
      body: JSON.stringify({ role }),
      method: 'PUT',
      headers: {
        Accept: 'application/json, text/plain, ',
        'Content-Type': 'application/json',
        authtoken: user.authtoken,
      },
    })

    const updatedInfo = await roleUpdate.json()

    return updatedInfo
  }

  async loginSeller(id, password) {
    const user = await this.loginwithFirebase(id, password)
    const roles = await this.checkRole(user)
    return roles
  }
  async loginUser(id, password) {
    const user = await this.loginwithFirebase(id, password)
    const userRole = await this.checkRole(user)

    if (userRole.role === 'user') {
      return { user: user, role: 'user' }
    }
    return { user: user, role: 'seller' }
  }
  async signupFirebase(id, password) {
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.key}`

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      const errorMessage = await response
        .json()
        .then((data) => data.error.errors[0].message)
      throw new Error(errorMessage)
    }
    const success = await response.json()
    return success
  }

  async signupLocal(data, role) {
    const url = 'http://localhost:8000/users/signup'
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        role: role,
      }),
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) throw new Error('failed to update to local database')

    return response
  }
}

export default UserStorage
