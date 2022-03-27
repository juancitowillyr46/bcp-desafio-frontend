export abstract class AgencyRepository {
    abstract getAllAgencies() :any;
    abstract getAgenciesById(idAgency: number): any;
}