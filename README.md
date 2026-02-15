# CKA 학습용 Kubernetes 환경

기존 리포지토리 파일은 모두 제거하고, CKA(Certified Kubernetes Administrator) 학습에 바로 사용할 수 있는 로컬 Kubernetes 실습 환경 구성 파일로 교체했습니다.

## 구성 요소

- `scripts/install-tools.sh`: Ubuntu/Debian 기준 `kubectl`, `kind`, `helm` 설치 스크립트
- `scripts/create-cluster.sh`: kind 기반 멀티노드 클러스터 생성
- `scripts/reset-cluster.sh`: 학습 환경 초기화(클러스터 삭제/재생성)
- `k8s/cluster-config.yaml`: CKA 실습용 kind 클러스터 설정
- `k8s/manifests/`: 실습 시작용 예제 매니페스트
- `cka/tasks.md`: 도메인별 CKA 연습 과제

## 빠른 시작

```bash
./scripts/install-tools.sh
./scripts/create-cluster.sh
kubectl get nodes
kubectl apply -f k8s/manifests/
```

## 권장 학습 루틴

1. `cka/tasks.md`에서 과제 하나 선택
2. 제한 시간(예: 20분) 설정 후 풀이
3. 정답 검증: `kubectl get/describe/logs` + YAML 재확인
4. 클러스터 초기화: `./scripts/reset-cluster.sh`
