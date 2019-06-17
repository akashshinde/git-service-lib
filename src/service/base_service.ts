import { GitSource } from './modal/gitsource'
import {RepoCheck} from "./modal/response_model/repo_check";
import {BranchList} from "./modal/response_model/branch_list";

 export abstract class BaseService {
    protected gitsource: GitSource;

    constructor(gitsource: GitSource) {
        this.gitsource = gitsource;
    }

    getRepoMetadata(){}

    abstract async getRepoLanguageList()
    abstract async getRepoBranchList(): Promise<BranchList>
    abstract async isRepoReachable(): Promise<RepoCheck>
    abstract getAuthProvider(): any;

}
