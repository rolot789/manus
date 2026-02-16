#!/usr/bin/env bash
set -euo pipefail

CLUSTER_NAME="${1:-cka-lab}"
CONFIG_FILE="k8s/cluster-config.yaml"

if ! command -v kind >/dev/null 2>&1; then
  echo "kind가 설치되어 있지 않습니다. scripts/install-tools.sh를 먼저 실행하세요." >&2
  exit 1
fi

if ! command -v kubectl >/dev/null 2>&1; then
  echo "kubectl이 설치되어 있지 않습니다. scripts/install-tools.sh를 먼저 실행하세요." >&2
  exit 1
fi

echo "클러스터 생성: ${CLUSTER_NAME}"
kind create cluster --name "${CLUSTER_NAME}" --config "${CONFIG_FILE}"

kubectl cluster-info --context "kind-${CLUSTER_NAME}"
kubectl get nodes

echo "학습용 네임스페이스 생성"
kubectl create namespace cka-practice --dry-run=client -o yaml | kubectl apply -f -

echo "기본 매니페스트 적용"
kubectl apply -f k8s/manifests/

echo "완료: kubectl config use-context kind-${CLUSTER_NAME}"
