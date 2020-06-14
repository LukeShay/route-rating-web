import { sendRequest, createJsonRequest } from '../utils'
import { User } from '@routerating/entities'

export function login(email: string, password: string): Promise<Response> {
  return sendRequest(
    createJsonRequest('auth/login', undefined, 'POST', undefined, undefined, {
      email,
      password,
    })
  )
}

export function createBasicUser(user: User): Promise<Response> {
  return sendRequest(
    createJsonRequest(
      'users/create',
      undefined,
      'POST',
      undefined,
      undefined,
      user
    )
  )
}

export function createAdminUser(user: User): Promise<Response> {
  return sendRequest(
    createJsonRequest(
      'users/create/admin',
      undefined,
      'POST',
      undefined,
      undefined,
      user
    )
  )
}

export function updateUser(user: User): Promise<Response> {
  return sendRequest(
    createJsonRequest('users', undefined, 'PUT', undefined, undefined, user)
  )
}
