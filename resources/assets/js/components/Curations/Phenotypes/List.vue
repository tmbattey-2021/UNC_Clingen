<style scoped>
    .unused {
        color: #aaa;
        /*text-decoration: line-through;*/
    }
</style>
<template>
    <div class="component-container row">
        <div v-if="phenotypes.length > 0" class=" col-lg-8">
            <!-- <strong>In this curation</strong> -->
            <table class="table table-sm table-xs mb-0">
                <thead>
                    <th>MIM Number</th>
                    <th style="width: 80%">Phenotype</th>
                </thead>
                <tbody>
                    <tr v-for="phenotype in phenotypes" :key="phenotype.id">
                        <td>{{ phenotype.mim_number }}</td>
                        <td>{{ phenotype.name }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="col" v-else>
            No phenotypes in this curation
        </div>
    </div>
</template>
<script>
    import OmimRepo from './../../../repositories/OmimRepository';

    export default {
        props: {
            geneSymbol: {
                required: true,
            }, 
            curation: {
                required: true,
                type: Object
            },
        },
        data: function () {
            return {
                phenotypes: []
            }
        },
        watch: {
            '$route': function (to, from) {
                this.phenotypes = this.curation.phenotypes || [];
            },
        },
        computed: {
            usedPhenotypes: function () {
                if (this.phenotypes.length > 0 && this.curation.phenotypes) {
                    return this.phenotypes.filter(pheno => this.curation.phenotypes.indexOf(pheno.phenotypeMimNumber) > -1)
                }
                return this.phenotypes;
            },
            unusedPhenotypes: function () {
                if (this.phenotypes.length > 0 && this.curation.phenotypes) {
                    return this.phenotypes.filter(pheno => this.curation.phenotypes.indexOf(pheno.phenotypeMimNumber) < 0)
                }
                return this.phenotypes;
            },
        },
        mounted: function () {
            this.phenotypes = this.curation.phenotypes || [];
        }
    }
</script>