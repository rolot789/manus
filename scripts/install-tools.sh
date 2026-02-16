#!/usr/bin/env bash
set -euo pipefail

if [[ "${EUID}" -ne 0 ]]; then
  SUDO="sudo"
else
  SUDO=""
fi

ARCH="$(uname -m)"
case "${ARCH}" in
  x86_64) BIN_ARCH="amd64" ;;
  aarch64|arm64) BIN_ARCH="arm64" ;;
  *)
    echo "지원하지 않는 아키텍처입니다: ${ARCH}" >&2
    exit 1
    ;;
esac

KUBECTL_VERSION="$(curl -fsSL https://dl.k8s.io/release/stable.txt)"
KIND_VERSION="v0.23.0"
HELM_VERSION="v3.15.4"

echo "[1/4] 패키지 업데이트"
${SUDO} apt-get update
${SUDO} apt-get install -y curl wget ca-certificates gnupg apt-transport-https

echo "[2/4] kubectl 설치: ${KUBECTL_VERSION}"
curl -fsSLo kubectl "https://dl.k8s.io/release/${KUBECTL_VERSION}/bin/linux/${BIN_ARCH}/kubectl"
chmod +x kubectl
${SUDO} mv kubectl /usr/local/bin/kubectl

echo "[3/4] kind 설치: ${KIND_VERSION}"
curl -fsSLo kind "https://kind.sigs.k8s.io/dl/${KIND_VERSION}/kind-linux-${BIN_ARCH}"
chmod +x kind
${SUDO} mv kind /usr/local/bin/kind

echo "[4/4] helm 설치: ${HELM_VERSION}"
curl -fsSL "https://get.helm.sh/helm-${HELM_VERSION}-linux-${BIN_ARCH}.tar.gz" -o helm.tar.gz
tar -xzf helm.tar.gz
chmod +x linux-${BIN_ARCH}/helm
${SUDO} mv linux-${BIN_ARCH}/helm /usr/local/bin/helm
rm -rf helm.tar.gz linux-${BIN_ARCH}

echo "설치 완료"
kubectl version --client
kind version
helm version
