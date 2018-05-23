---
Added: v2.0.0
Status: Active
Last reviewed: 2018-05-04
---

# Bpm User service

Gets information about the current Process Services user.

## Class members

### Methods

-   `getCurrentUserInfo(): Observable<BpmUserModel>`<br/>
    Gets information about the current user.
    -   **Returns** `Observable<BpmUserModel>` - User information object
-   `getCurrentUserProfileImage(): string`<br/>
    Gets the current user's profile image as a URL.
    -   **Returns** `string` - URL string

## Details

The class returned by `getCurrentUserInfo` is detailed
in the [Bpm User model docs](bpm-user.model.md).

See the
[getProfile](https://github.com/Alfresco/alfresco-js-api/blob/master/src/alfresco-activiti-rest-api/docs/ProfileApi.md#getProfile)
and
[getProfilePictureUrl](https://github.com/Alfresco/alfresco-js-api/blob/master/src/alfresco-activiti-rest-api/docs/ProfileApi.md#getProfilePictureUrl)
methods in the Alfresco JS API for more information about the REST calls used by this service.

## See also

-   [Ecm user service](ecm-user.service.md)
-   [Bpm user model](bpm-user.model.md)