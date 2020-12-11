/**
 * #######################################################
 * ## Obtener un array con TODAS las series cada página ##
 * #######################################################
 * 
 * API: https://www.episodate.com/api
 * 
 * Como el nº de series es muuuuuy elevado el nº de peticiones que deberíamos 
 * hacer sería muy grande, y la solución podría tardar varios minutos.
 * 
 * Recomendable limitar la búsqueda a las 5 primeras páginas de resultados.
 * 
 */

'use strict';

const getAllSeries = async () => {

    try {

        const response_1 = await fetch(`https://www.episodate.com/api/most-popular`);

        const data_1 = await response_1.json();

        const totalPages = data_1.pages;

        const totalSeries = [];

            // He puesto hasta 5 para evitar la espera. Debería haber puesto "totalPages", pero 
            // de lo contrario la espera podría llegar a ser de varios minutos...
            for (let i = 1; i <= 5; i++) {

                try {

                    const data_2 = await (await fetch(`https://www.episodate.com/api/most-popular?page=${i}`)).json();

                    totalSeries.push(...data_2.tv_shows);

                } catch (error) {

                    return error;

                }

            }

        console.log(totalSeries);

    } catch (error) {

        return error;

    }

}

getAllSeries();