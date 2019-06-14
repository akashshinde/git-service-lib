import { BaseService } from './base_service'
import * as Octokit from '@octokit/rest'
import * as GitUrlParse from 'git-url-parse'
import { RepoMetadata } from './modal/repo_metadata'
import { GitSource } from "./modal/gitsource";
import {RepoCheck} from "./modal/response_model/repo_check";
import {Branch, BranchList} from "./modal/response_model/branch_list";

export class GithubService extends BaseService {

    client: Octokit

    constructor(gitsource: GitSource) {
        super(gitsource)
        this.client = new Octokit()
    }

    async isRepoReachable(): Promise<RepoCheck> {
        var metadata:RepoMetadata = this.getRepoMetadata();
        try {
            const resp = await this.client.repos.get({
                owner: metadata.owner,
                repo: metadata.repoName,
            });
            return new RepoCheck(resp, resp.status === 200)
        }catch (e) {
            throw e;
        }
    }

    async getRepoBranchList(): Promise<BranchList> {
        const metadata = this.getRepoMetadata();
        try {
            const resp = await this.client.repos.listBranches({
                owner: metadata.owner,
                repo: metadata.repoName
            })

            const list = resp.data.map( r => {
              return new Branch(r.name);
            })
            return new BranchList(resp, list)
        }catch (e) {
            throw e;
        }
    }

    getRepoLanguageList() {
      throw new Error("Method not implemented.");
    }


    getRepoMetadata() {
        const metadata = GitUrlParse(this.gitsource.url)
        return new RepoMetadata(
            metadata.owner,
            metadata.source,
            metadata.ref,
            metadata.name
        )
    }
}
