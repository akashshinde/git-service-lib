import * as Bitbucket from 'bitbucket'
import { BaseService } from "./base_service";
import { RepoMetadata } from './modal/repo_metadata'
import * as parseBitbucketUrl from 'parse-bitbucket-url'
import {GitSource} from "./modal/gitsource";
import {RepoCheck} from "./modal/response_model/repo_check";
import {Branch, BranchList} from "./modal/response_model/branch_list";

export class BitbucketService extends BaseService {

  getRepoLanguageList() {
    throw new Error("Method not implemented.");
  }
    client: Bitbucket

    constructor(gitsource: GitSource) {
        super(gitsource);
        this.client = new Bitbucket();
    }

    async isRepoReachable(): Promise<RepoCheck> {
        try {
            const metadata = this.getRepoMetadata();
            const resp = await this.client.repositories.get({
                repo_slug: metadata.repoName,
                username: metadata.owner
            })
            return new RepoCheck(resp, true)
        }catch (e) {
            throw e;
        }
    }

    async getRepoBranchList(): Promise<BranchList> {
        const metadata = this.getRepoMetadata();
        try {
            const resp = await this.client.refs.listBranches({
                repo_slug: metadata.repoName,
                username: metadata.owner
            })
            const list = resp.data.values.map(v => new Branch(v.name));
            return new BranchList(resp, list)
        }catch (e) {
            throw e;
        }
    }

    getRepoMetadata() {
        const metadata = parseBitbucketUrl(this.gitsource.url);
        return new RepoMetadata(
            metadata.owner,
            metadata.source,
            metadata.ref,
            metadata.name
        )
    }
}
