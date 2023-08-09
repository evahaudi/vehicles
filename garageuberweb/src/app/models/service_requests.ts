export interface ServiceRequest{
  id: number;
  requestedUserName: string;
  requestedUserPhone: string;
  requestedUserLocation: string;
  requestedUserImageURL: string;
  requestedUserRequestedService: string;
  requestedUserCode: string;

  requestedGarageName: string;
  requestedGarageLocation: string;
  requestedGaragePhone: string;
  requestedGarageEmail: string;
  requestedGarageOwnerName: string;
  requestedGarageLogoImageURL: string;
  requestedGarageCode: string;
  requestedServiceCharges: number;
  waitingTime: number;
  serviceStatus: string;
  serviceStatusCode: string;
}
