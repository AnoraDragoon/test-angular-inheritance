import { IParentUserModel } from "src/app/parent/models/parent-user.model";

/**
 * Standar extend
 * Extends every parent attributes and, can add new ones
 */
export interface IChildUserModel extends IParentUserModel {
    status: boolean;
}

/**
 * Partial extend
 * Extends every parent attributes as optional, can add new ones
 * { id?: string, name?: string, ... }
 */
export interface IPartialChildModel extends Partial<IChildUserModel> { }

/**
 * Omit extend
 * Extends every parent attributes except mentioned (id, status), can add new ones.
 */
export interface INewChildModel extends Omit<IChildUserModel, 'id' | 'status'> {
    password: string;
 }

/**
 * Pick extend
 * Extends only parent attributes mentioned (email), can add new ones.
 */
export interface ILoginUserModel extends Pick<IParentUserModel, 'email'> {
    password: string;
}
