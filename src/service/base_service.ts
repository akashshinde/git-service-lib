import { GitSource } from './modal/gitsource'
import {RepoCheck} from "./modal/response_model/repo_check";
import {BranchList} from "./modal/response_model/branch_list";
import {RepoFileList} from "./modal/response_model/repo_file_list";
import {BuildType, detectBuildType} from "../build_type_detection/detector";

 export abstract class BaseService {
    protected gitsource: GitSource;

    protected constructor(gitsource: GitSource) {
        this.gitsource = gitsource;
    }

    public async detectBuildType() : Promise<BuildType[]> {
      try {
        const fileList = await this.getRepoFileList();
        return detectBuildType(fileList.files);
      }catch (e) {
        throw e;
      }
    }

    getRepoMetadata(){}
    abstract async getRepoLanguageList()
    abstract async getRepoBranchList(): Promise<BranchList>
    abstract async isRepoReachable(): Promise<RepoCheck>
    abstract getAuthProvider(): any;
    abstract async getRepoFileList(): Promise<RepoFileList>

}
