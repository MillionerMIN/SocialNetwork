import { UsersType } from "../redux/users-reducer";

export const updateObjectInArray = (items: UsersType[], itemId: number, objPropName: 'id', newObjProps: {}) => {
  return items.map(u => {
    if (u[objPropName] === itemId) {
      return { ...u, ...newObjProps }
    }
    return u;
  })
}