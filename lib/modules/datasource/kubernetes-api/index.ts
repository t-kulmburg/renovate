import { Datasource } from '../datasource';
import type { GetReleasesConfig, ReleaseResult } from '../types';
import { KubernetesApiVersions } from './mapping';

export class KubernetesApiDatasource extends Datasource {
  static readonly id = 'kubernetes-api';

  constructor() {
    super(KubernetesApiDatasource.id);
  }

  getReleases({
    packageName,
  }: GetReleasesConfig): Promise<ReleaseResult | null> {
    const versions = KubernetesApiVersions[packageName];
    if (versions) {
      const releases = versions.map((version) => ({ version }));
      return Promise.resolve({ releases });
    }

    return Promise.resolve(null);
  }
}
