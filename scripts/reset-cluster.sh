#!/usr/bin/env bash
set -euo pipefail

CLUSTER_NAME="${1:-cka-lab}"

if command -v kind >/dev/null 2>&1; then
  echo "기존 클러스터 삭제: ${CLUSTER_NAME}"
  kind delete cluster --name "${CLUSTER_NAME}" || true
fi

"$(dirname "$0")/create-cluster.sh" "${CLUSTER_NAME}"
